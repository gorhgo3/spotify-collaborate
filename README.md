# Spotify Collaboration API Exploration

## Overview
This repository documents our exploration of alternative pipelines for interacting with Spotify's API, specifically for user playlist collaboration. This became necessary when Spotify discontinued existing API features during our final group project at EDA.

## Objective
The main goal is to establish a server-side master account for Spotify, allowing client-side user logins. All collaborative interactions will be conducted through the server account, streamlining playlist management on Spotify's client.

## Background
Our final group project faced challenges due to changes in Spotify's API. This repository serves as a continuation of that work, focusing on exploring viable alternatives.

## Approach
- **Server-Side Master Account**: Implementing a master account on the server to manage all user collaborations.
- **Client-Side User Interaction**: Ensuring that each user can log in and interact from the client-side.
- **Spotify Client Integration**: Implementing collaborative playlists directly onto the Spotify client.
- **Database Management**: Initially considering, but ultimately avoiding, the complexities of maintaining long-term databases for this purpose.
