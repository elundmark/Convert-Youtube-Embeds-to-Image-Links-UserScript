#!/usr/bin/env bash

PASSM="/run/shm/.password_manager"
if [[ "$PWD" =~ convert_youtube_embeds_to_image_links$ ]] && [[ -x "$PASSM" ]]; then
	rsyncWeb () {
		local SSHHOME=$($PASSM "binero-ssh-path")
		local SSHUSER=$($PASSM "binero-ssh-user")
		local SSHURL=$($PASSM "binero-ssh-url")
		rsync --verbose --progress --stats --times --recursive --perms --delete --copy-links \
			--exclude ".*" --exclude "build.sh" --exclude "*sublime*" -e ssh "$PWD/" \
		"$SSHUSER""@""$SSHURL"":""$SSHHOME""/elundmark.se/public_html/_files/js/convert_youtube_embeds_to_image_links/"
	}
	gitCommit () {
		echo -n "Version release number?: "
		read gitversionnumber
		echo -n "Enter a description for the commit: "
		read gitcommitmsg
		if [[ "$gitversionnumber" =~ [0-9] ]] ; then
			gitcommitmsg="v$gitversionnumber $gitcommitmsg"
		fi
		read -p "Is '""$gitcommitmsg""' correct? (y/n): " CONT
		if [[ $? -eq 0 ]] && [[ "$CONT" == "y" || ! $CONT || "$CONT" = "" ]] ; then
			echo "\$ git add . ; git commit -am ""$gitcommitmsg""; git push origin master"
			git add --all .
			git commit -am "$gitcommitmsg"
			git push origin master
			if [[ "$gitversionnumber" =~ [0-9] ]] ; then
				git tag "$gitversionnumber"
				git push --tags origin master
			fi
		else
			echo "Exiting..."
			exit 1
		fi
	}
	if [[ "$1" ]] && [[ "$1" = "all" ]] || [[ "$1" = "publish" ]] ; then
		gitCommit
		rsyncWeb
		exit 0
	elif [[ "$1" ]] && [[ "$1" = "git" ]] ; then
		gitCommit
	elif [[ "$1" ]] && [[ "$1" = "sftp" ]] || [[ "$1" = "upload" ]] ; then
		rsyncWeb
	else
		echo "Missing commandline argument[s]"
		exit 1
	fi
else
	exit 1
fi
