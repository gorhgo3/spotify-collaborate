# Spotify Collaboration API Exploration

## Overview
This repository documents my exploration of alternative pipelines for interacting with Spotify's API, specifically for user playlist collaboration. This became necessary when Spotify discontinued existing API features during our final group project at EDA. The main goal for me was to explore key workarounds for the challenges our group faced with the Spotify Api. Discontinued collaboration. This repository serves as a continuation of that work, I focused on exploring viable alternatives namely instilling a server AND client connection.

## Objective
The main goal is to establish a server-side master account for Spotify, allowing client-side user logins. All collaborative interactions will be conducted through the server account, streamlining playlist management on Spotify's client.

## Approach
- **Server-Side Master Account**: Implementing a master account on the server to manage all user collaborations.
- **Client-Side User Interaction**: Ensuring that each user can log in and interact from the client-side.
- **Spotify Client Integration**: Implementing collaborative playlists directly onto the Spotify client.
- **Database Management**: Initially considering, but ultimately avoiding, the complexities of maintaining long-term databases for this purpose.

## Development note*
This repo is left at a place where a user can interact between dissimilar accounts- This is occuring by adding new tracks to the server connection once an authenticated client account is logged in the browser.
