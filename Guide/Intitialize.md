# Initializing git and project in your desktop
- Steps :

        - name a folder as "Webspace"
        - open that folder in vs code.
        - in terminal the following commend
                
                git init
                git add .
                git commit -m "initial commit"
                git remote add origin https://github.com/Sandeep-XD/Webspace.git
                git pull origin master
                git push -u origin master

# Installing dependency

- Steps :   
        
        -for installing tailwind
        -in terminal the following commend
            
            npm install
            npm install -D tailwindcss postcss autoprefixer
            npx tailwindcss init -p

# Deploying server in local host
- Steps :
        
        -in terminal the following commend
            
            npm run dev