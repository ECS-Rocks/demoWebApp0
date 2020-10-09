# This function gets called whenever a GET request is sent to the URL of the
# website. It inserts the javascript into the HTML and then serves up the
# resultant webpage. We can't include the javascript into the HTML by using
# the src attribute, like <script src="./scripts.js">, because the actual files
# in this directory aren't visible on the client side at all.


def lambda_handler(event, context):
    html = open("index.html").read()
    js = open("scripts.js").read()
    result_body = html.replace("'%%JAVASCRIPT%%'", js)

    return {
        "status": 200,
        "body": result_body
    }
