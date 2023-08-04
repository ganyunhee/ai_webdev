from flask import Flask, render_template, jsonify, request, redirect, flash
import pymysql

connect = Flask(__name__, static_url_path='', static_folder='templates/static', template_folder='templates')

def connection():
    s = 'localhost' # server host name
    d = 'mypage'
    u = 'root' # login user
    p = '0000' # login password
    conn = pymysql.connect(host=s, user=u, password=p, database=d)
    return conn

@connect.route("/submit_contact_form", methods=["POST"])
def submit_contact_form():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    # Insert the data into the database
    conn = connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO contact_form (full_name, email, message) VALUES (%s, %s, %s)",
                   (name, email, message))
    conn.commit()
    conn.close()

    return redirect("/")

@connect.route("/get_blog_content/<int:blog_id>")
def get_blog_content(blog_id):
    conn = connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM blog_content WHERE blog_id = %s", (blog_id,))
    contents = []
    for row in cursor.fetchall():
        contents.append({"id": row[0], "blog_id": row[1], "content_type": row[2], "content_text": row[3], "url_link": row[4]})
    
    conn.close()
    return jsonify(contents)

@connect.route("/")
def main():
    contact_reqs = []
    posts = []
    contents = []
    comments = []

    conn = connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM contact_form")
    for row in cursor.fetchall():
        contact_reqs.append({"id": row[0], "full_name": row[1], "email": row[2], "message": row[3]})

    cursor.execute("SELECT * FROM blog_posts")
    for row in cursor.fetchall():
        posts.append({"id": row[0], "title": row[1], "creation_date": row[2], "tag": row[3], "content_id": row[4]})

    cursor.execute("SELECT * FROM blog_comment")
    for row in cursor.fetchall():
        comments.append({"id": row[0], "blog_id": row[1], "author_name": row[2], "comment_text": row[3], "comment_date": row[4]})
    
    conn.close()

    return render_template("display.html", contact_reqs = contact_reqs, posts = posts, contents = contents, comments = comments)


if(__name__ == "__main__"): 
    connect.run(debug=True)