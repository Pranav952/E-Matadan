# ई-matadan

**Decentralized Voting System**

## Project Description

ई-matadan is a decentralized voting system that leverages blockchain technology to ensure secure, transparent, and tamper-proof voting processes. It provides a seamless platform for voters to cast their votes in a decentralized manner, ensuring the integrity and anonymity of each vote.

## Features

*   **Decentralized Architecture:** Ensures transparency and security using blockchain.
    
*   **Voter Authentication:** Secure voter login with Google authentication and JWT tokens.
    
*   **Anonymity:** Preserves voter privacy by anonymizing votes.
    
*   **Tamper-Proof Records:** Immutable vote records using blockchain.
    
*   **Cross-Platform Compatibility:** Designed to work seamlessly across devices.
    

## Technology Stack

*   **Frontend:** React.js
    
*   **Backend:**
    
    *   Spring Boot: Handles authentication.
        
    *   Django: Manages voting data and operations.
        
*   **Blockchain:** Used for recording and verifying votes.
    
*   **Authentication:** Google Login with JWT.
    

## Project Structure

    ematadan/
    ├── backend/        # Contains Django project for data management
    ├── frontend/       # Contains React project for user interface
    └── blockchain/     # Contains blockchain-related scripts and smart contracts

## Installation and Setup

1.  **Clone the Repository:**
    
        git clone https://github.com/<username>/ematadan.git
        cd ematadan
    
2.  **Backend Setup (Django):**
    
        cd backend
        python -m venv env
        source env/bin/activate  # Use `env\\Scripts\\activate` on Windows
        pip install -r requirements.txt
        python manage.py migrate
        python manage.py runserver
    
3.  **Frontend Setup (React):**
    
        cd ../frontend
        npm install
        npm start
    
4.  **Blockchain Setup:**
    
    *   Install [Truffle](https://trufflesuite.com/):
        
            npm install -g truffle
        
    *   Navigate to the blockchain folder and deploy smart contracts:
        
            cd ../blockchain
            truffle compile
            truffle migrate
        
5.  **Spring Boot Setup:**
    
    *   Open the Spring Boot project in your preferred IDE (e.g., IntelliJ or Eclipse).
        
    *   Run the application.
        
6.  **Environment Variables:** Create a `.env` file in the required directories with the necessary environment variables (e.g., API keys, database credentials).
    

## Usage

1.  Access the frontend application at `http://localhost:3000`.
    
2.  Log in using Google authentication.
    
3.  Cast your vote securely.
    
4.  Verify your vote on the blockchain.
    

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
    
2.  Create a new branch for your feature or bugfix.
    
3.  Commit your changes and push them to your fork.
    
4.  Submit a pull request.
    

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

*   NCIT College
    
*   Hackathon team **0xCdeRz**
