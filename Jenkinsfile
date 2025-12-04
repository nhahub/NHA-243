pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'e-commerce-app'
        REGISTRY_CREDENTIALS_ID = 'docker-hub-credentials' // Replace with your Jenkins credentials ID
        DOCKER_REGISTRY = 'your-dockerhub-username' // Replace with your DockerHub username
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // sh 'npm test' // Uncomment when tests are available
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    docker.build("${DOCKER_REGISTRY}/${DOCKER_IMAGE}:${BUILD_NUMBER}")
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
