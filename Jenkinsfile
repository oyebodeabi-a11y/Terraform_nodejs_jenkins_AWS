pipeline{
    agent any
    stages{
        stage("GitHub checkout") {
            steps {
                script {
 
                    git branch: 'main', url: 'https://github.com/oyebodeabi-a11y/Terraform_nodejs_jenkins_AWS' 
                }
            }
        }
        stage("Remove all old images"){
            steps{
                sh 'printenv'
                sh 'git version'
                sh 'docker ps'
                sh 'docker images'
                
            
            input(message: "Are you sure you want to continue?", ok: "yes ")
            }
        
        }
        stage("build docker images"){
            steps{
               
            sh 'docker images'
            sh 'docker build . -t bims15/diamindimg'
           }
        }
        
        stage("push image to DockerHub"){
            steps{
                script {
                    withCredentials([string(credentialsId: 'dockerID', variable: 'dockerID')]) {
                        sh 'docker login -u bims15 -p ${dockerID}'
                    }
                    sh 'docker push bims15/diamindimg:latest'
                }
            }       
            
        }
    }
}
