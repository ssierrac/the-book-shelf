pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:18-alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
}