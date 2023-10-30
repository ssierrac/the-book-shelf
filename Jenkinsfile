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
    stage("Unit-Test") {
        steps {
          sh "chmod +x ./jenkins/apps/books-service/test.sh"
          sh './jenkins/apps/books-service/test.sh'
        }
    }
    stage("E2E-Test") {
        steps {
          sh "cd"
          sh "chmod +x ./jenkins/apps/books-service/e2e-test.sh"
          sh './jenkins/apps/books-service/e2e-test.sh'
        }
    }
    stage("Build") {
      steps {
        sh "cd"
        sh "chmod +x ./jenkins/apps/books-service/build.sh"
        sh './jenkins/apps/books-service/build.sh'
      }
    }
    stage("Deliver") {
      steps {
        sh "cd"
        sh "chmod +x ./jenkins/apps/books-service/deliver.sh"
        sh "chmod +x ./jenkins/apps/books-service/kill.sh"
        sh './jenkins/apps/books-service/deliver.sh'
        input message: 'Finished using the web site? (Click "Proceed" to continue)'
        sh "cd"
        sh './jenkins/apps/books-service/kill.sh'
      }
    }
  }
}