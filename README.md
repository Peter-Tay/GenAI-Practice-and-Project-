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
  * stores the conversation history with ConversationBufferMemory
2. [[Completed Slides]()]Personal Web Application Builder
* An Agentic AI based tool which help generate code and build the entire web application.
* Methodology
  * Planner: Design a complete engineering project plan based on user request
  * Architect: Break given project plan into multiple explicit implementation engineering tasks
  * Coder: Implement given specific engineering task
3. [[Completed Slides]()]Personal Research Assistant
* A Multi-Agent AI based tool which help gathers, analyzes and summarizes a given topic into a final report.
* Methodology
  * Supervisor Agent: Supervise and manages a team of agents
  * Researcher Agent: Gathers information and data
  * Analyst Agent: Analyzes data and provides insights
  * Writer Agent: Creates reports and summaries
4. [[Completed Slides](https://drive.google.com/file/d/1WQH9eHFGD7F7aJ3tWAYpnl3sLQmHSobO/view?usp=sharing)]SpaceX Falcon 9 First Stage Landing Prediction
* Predict Falcon 9 launch result with unstructured data collected from Web scraping.
* Methodology
  * Data Collection using SpaceX API and Web Scraping to collect datasets
  * EDA Data Visualization (SQL, Matplotlib, Folium, Ploty Dash)
  * Train multiple models (Scikit-learn, GridSearchCV) to predict Falcon 9 launch result
3. Other Projects in Github(Gradient Boosted Trees Water Quality, Time Series Forecasting Weather, ReAct...)
