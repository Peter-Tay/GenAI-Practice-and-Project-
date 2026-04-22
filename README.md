Project List
1. [[Completed Slides](https://drive.google.com/file/d/1PiJv38a6BAKQLdjDFo4y0OM_yxK9zSbD/view?usp=sharing)]Personal Doctor Chatbot
* A RAG based Chatbot with Professional Medical Knowledge (over 2,000 medical topics), which allow user
immediate access on a variety diseases, symptoms, treatments, and pharmaceuticals.
* Methodology
  * PDF-to-Text Extraction, Filter documents and chunking
  * Embed Document to Vector 384-D
  * Upload to Pinecones Vector DataBase as Knowledge Base
  * LangChain OpenAI(gpt-4o) retrieve top-3 response from Pinecones
  * Flask + HTML + AWS Deployment (IAM, ECR, EC2)
2. [[Completed Slides](https://drive.google.com/file/d/1WQH9eHFGD7F7aJ3tWAYpnl3sLQmHSobO/view?usp=sharing)]SpaceX Falcon 9 First Stage Landing Prediction
* Predict Falcon 9 launch result with unstructured data collected from Web scraping
* Methodology
  * Data Collection using SpaceX API and Web Scraping to collect datasets
  * EDA Data Visualization (SQL, Matplotlib, Folium, Ploty Dash)
  * Train multiple models (Scikit-learn, GridSearchCV) to predict Falcon 9 launch result
3. Other Projects in Github(Gradient Boosted Trees Water Quality, Time Series Forecasting Weather, ReAct...)
