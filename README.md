# Celenix

# Celenix

A modern marketplace web application built with a decoupled architecture, featuring a high-performance Python backend and a reactive frontend.

## 🛠 Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS, Axios
- **Backend:** Python, FastAPI, Pydantic
- **Database:** PostgreSQL (Production) / SQLite (Dev), SQLAlchemy ORM

## 🚀 Quick Start

### 1. Backend Setup (Python)
Navigate to the backend folder and start the API server.

```bash
cd backend
# Create virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn app.main:app --reload
