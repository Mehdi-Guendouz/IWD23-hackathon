from flask import Flask, render_template,request,jsonify
import numpy as np
import joblib
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
def processAi(text):
  symptomps = ['itching',
  ' skin_rash',
  ' nodal_skin_eruptions',
  ' dischromic _patches',
  ' continuous_sneezing',
  ' shivering',
  ' chills',
  ' watering_from_eyes',
  ' stomach_pain',
  ' acidity',
  ' ulcers_on_tongue',
  ' vomiting',
  ' cough',
  ' chest_pain',
  ' yellowish_skin',
  ' nausea',
  ' loss_of_appetite',
  ' abdominal_pain',
  ' yellowing_of_eyes',
  ' burning_micturition',
  ' spotting_ urination',
  ' passage_of_gases',
  ' internal_itching',
  ' indigestion',
  ' muscle_wasting',
  ' patches_in_throat',
  ' high_fever',
  ' extra_marital_contacts',
  ' fatigue',
  ' weight_loss',
  ' restlessness',
  ' lethargy',
  ' irregular_sugar_level',
  ' blurred_and_distorted_vision',
  ' obesity',
  ' excessive_hunger',
  ' increased_appetite',
  ' polyuria',
  ' sunken_eyes',
  ' dehydration',
  ' diarrhoea',
  ' breathlessness',
  ' family_history',
  ' mucoid_sputum',
  ' headache',
  ' dizziness',
  ' loss_of_balance',
  ' lack_of_concentration',
  ' stiff_neck',
  ' depression',
  ' irritability',
  ' visual_disturbances',
  ' back_pain',
  ' weakness_in_limbs',
  ' neck_pain',
  ' weakness_of_one_body_side',
  ' altered_sensorium',
  ' dark_urine',
  ' sweating',
  ' muscle_pain',
  ' mild_fever',
  ' swelled_lymph_nodes',
  ' malaise',
  ' red_spots_over_body',
  ' joint_pain',
  ' pain_behind_the_eyes',
  ' constipation',
  ' toxic_look_(typhos)',
  ' belly_pain',
  ' yellow_urine',
  ' receiving_blood_transfusion',
  ' receiving_unsterile_injections',
  ' coma',
  ' stomach_bleeding',
  ' acute_liver_failure',
  ' swelling_of_stomach',
  ' distention_of_abdomen',
  ' history_of_alcohol_consumption',
  ' fluid_overload',
  ' phlegm',
  ' blood_in_sputum',
  ' throat_irritation',
  ' redness_of_eyes',
  ' sinus_pressure',
  ' runny_nose',
  ' congestion',
  ' loss_of_smell',
  ' fast_heart_rate',
  ' rusty_sputum',
  ' pain_during_bowel_movements',
  ' pain_in_anal_region',
  ' bloody_stool',
  ' irritation_in_anus',
  ' cramps',
  ' bruising',
  ' swollen_legs',
  ' swollen_blood_vessels',
  ' prominent_veins_on_calf',
  ' weight_gain',
  ' cold_hands_and_feets',
  ' mood_swings',
  ' puffy_face_and_eyes',
  ' enlarged_thyroid',
  ' brittle_nails',
  ' swollen_extremeties',
  ' abnormal_menstruation',
  ' muscle_weakness',
  ' anxiety',
  ' slurred_speech',
  ' palpitations',
  ' drying_and_tingling_lips',
  ' knee_pain',
  ' hip_joint_pain',
  ' swelling_joints',
  ' painful_walking',
  ' movement_stiffness',
  ' spinning_movements',
  ' unsteadiness',
  ' pus_filled_pimples',
  ' blackheads',
  ' scurring',
  ' bladder_discomfort',
  ' foul_smell_of urine',
  ' continuous_feel_of_urine',
  ' skin_peeling',
  ' silver_like_dusting',
  ' small_dents_in_nails',
  ' inflammatory_nails',
  ' blister',
  ' red_sore_around_nose',
  ' yellow_crust_ooze']
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
    return jsonify({"prediction":resp})
if __name__=="__main__":
    app.run(debug=True)