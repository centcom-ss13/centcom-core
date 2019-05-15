pipeline {
  agent any

  environment {
      NODE_ENV = 'cert'
  }

  stages {
    stage('Install') {
      steps {
        nodejs('main') {
          sh 'npm ci'
        }
      }
    }
    stage('Deploy Containers') {
      steps {
        nodejs('main') {
          sh 'docker-compose up'
        }
      }
    }
  }
}