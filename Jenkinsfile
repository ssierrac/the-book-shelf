pipeline {
  agent {
    docker {
      image 'node:20.9.0-alpine3.18'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Init') {
      steps {
        sh 'npm install'
      }
    }
    stage("Test") {
        steps {
            sh "chmod +x ./jenkins/apps/books-service/test.sh"
            sh './jenkins/apps/books-service/test.sh'
        }
    }

  }
}