def lambda_handler(event, context):
    html = open("index.html").read()

    return {
        "status": 200,
        "body": html
    }
