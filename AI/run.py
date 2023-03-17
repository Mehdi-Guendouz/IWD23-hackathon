from flask import Flask, render_template,request,jsonify
import numpy as np
import joblib
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from symptomps import symptomps
def processAi(text):
  
  X_pred = pd.DataFrame(data=None, columns=symptomps)
  row = {}
  c = 0
  for col in X_pred.columns:
    words = col.split("_")
    if len([word for word in words if word in text])>=len(words)*0.5:
      row[col]=1
      c+=1;
    else:
      row[col]=0
  if c<3:
    raise ValueError("Provide more symptomps please!")
  X_pred = X_pred.append(row,ignore_index=True)
  model = joblib.load("./model/model.joblib")
  y_pred = model.predict(X_pred)
  diseases = y_pred.tolist()
  res = [diseases,[],[],[],[],[]]
  df = pd.read_csv("./model/symptom_Description.csv") 
  df2 = pd.read_csv("./model/symptom_precaution.csv")
  for disease in diseases:
    res[1].append(str(df[df['Disease']==disease]["Description"].values[0]))
    for i in range(2,6):
      res[i].append(str(df2[df2['Disease']==disease][f"Precaution_{i-1}"].values[0]))
  return res


app = Flask(__name__)
@app.route("/predict",methods=["POST"])
def predict():
    json_ =  request.json["text"]

    resp = processAi(json_)
    df=pd.read_csv('Desease-speciality.csv')
    row = df.loc[df['Disease'] == resp[0][0]]
  
    if len(row) == 0:
        return jsonify({"error":"Disease not found"})
    else:
        return jsonify({"prediction":row.iloc[0]['Specialist']})
    
if __name__=="__main__":
    app.run(debug=True,port=8000)