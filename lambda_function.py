

def lambda_handler(event, context):
    f = open('index     asdas  hi.html', 'r')
    html = f.read()
    f.close()    

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'text/html'
        },
        'body': html
    }
