# The Ultimate Git Guide

## common git commend

- To push your update into github repo

        git add .
        git commit -m "message"
        git push origin master
        git status

- To pull updates from github

        git pull origin 
        git status

- To create a new branch

            git branch <branch-name>

- To active a branch

            git checkout <branch-name>


- Git Branches

        to see all the available branches

            git branch
        
            git checkout -b <branch-name>
            git checkout <branch-name>

- Git Merge

            git merge <branch-name>

- Git Remote

            git remote add origin <repository-url>
            git remote -v
            git remote remove origin
            git remote set-url origin <repository-url>
            
- Git Stash

            git stash
            git stash pop
            git stash list
            git stash apply

