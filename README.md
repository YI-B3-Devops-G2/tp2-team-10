# B3 Devops Projet - Team 10

## Informations

### Team 10

* Mail: tony.phongsavath@ynov.com<br>
Github_username: tonyphg <br>

* Mail: youssef.madhous@ynov.com<br>
Github_username: Madhous<br>

## TP - Sujet 1

### Prérequis

- Docker
- Docker Compose
> Pour l'installer : [Docker](https://docs.docker.com/install/)

- Nodejs
> Pour l'installer : [NodeJS](https://nodejs.org/en/download/)
- Terminal / PowerShell

## Installation 

- Télécharger le .zip
- Dans un terminal se déplacer dans tp2-team-10
- Taper dans le terminal la commande suivante :
```
docker pull htysn21/api:latest
```

- Il faudra ensuite lancer l'API avec la commande suivante :
```
docker run htysn21/api
```

## Vérification

- Pour tester le bon fonctionnement, taper sur un navigateur l'url suivant :
```
http://localhost:3000/api
```

- Vous devrez avoir ce message :
```
{"message":"Hello World"}
```

- Le test est aussi valable avec le /status, qui cette fois nous renvoie une page spécifique de l'API :
> URL : http://localhost:3000/api/status