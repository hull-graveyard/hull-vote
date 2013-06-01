# Vote Tutorial

For this tutorial, we'll create a upvote/downvote system.

* Log the user in with his/her Facebook account
* Show buttons to upvote, downvote and cancel a vote, and the count of votes.

[Here's a live demo](http://hull.github.io/hull-vote/).

The code for this project can be found on
[GitHub](https://github.com/hull/hull-vote).

## What you will need

- A hull.io application. [Create one](http://hullapp.io/) if you haven’t already.
- An authentication provider linked to your app, so users can log in.

## Step 1 - Bootstrap your app

First, create an `index.html`. Add jQuery, and `hull.js` to your page. For the
sake of this tutorial, we will also use Twitter Bootstrap, though it is not
mandatory. The default markup we use is bootstrap-compatible.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js" type="text/javascript"></script>
    <script src="//hull-js.s3.amazonaws.com/0.4.9/hull.js" type="text/javascript"></script>

Now initialize hull.

    <script type="text/javascript">
      Hull.init({
        appId: 'APPLICATION_ID',
        orgUrl: 'ORGANIZATION_URL'
      });
    </script>

Replace `APPLICATION_ID` and `ORGANIZATION_URL` with the correct values from
your [admin](http://hullapp.io).

## Step 2 - Add the vote widget

The Vote Buttons widget is available from the hull library
To add it, just insert :

            <div class="well" data-hull-widget="vote_buttons@hull" data-hull-uid="ANY_EXTERNAL_ID">Loading...</div>

or

            <div class="well" data-hull-widget="vote_buttons@hull" data-hull-uid="HULL_ID">Loading...</div>

And you'll be good to go!
