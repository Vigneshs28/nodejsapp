pipeline {
  agent any
  stages {
    stage('SCM') {
      steps {
        echo 'SCM'
      }
    }
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            echo 'Build Code'
          }
        }
        stage('Compile') {
          steps {
            echo 'Compile Code'
          }
        }
      }
    }
    stage('Test') {
      parallel {
        stage('Test') {
          steps {
            echo 'FireFox Test'
          }
        }
        stage('IE') {
          steps {
            echo 'IE Test'
          }
        }
        stage('Chrome') {
          steps {
            echo 'Chrome Test'
          }
        }
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploy Code'
      }
    }
  }
}