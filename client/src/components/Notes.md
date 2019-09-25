
curl 'https://wunderlist2019.herokuapp.com/tasks/add' -H 'Accept: application/json, text/plain, */*' -H 'Referer: http://localhost:3000/home' -H 'Origin: http://localhost:3000' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36' -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imxpc2ExOTc5IiwiaWF0IjoxNTY5NDMzNjc3LCJleHAiOjE1Njk4NjU2Nzd9.tO3QCNZf20-dBkS1pwJgZM2LzVHsDt3G7BkMmzxKuGU' -H 'Sec-Fetch-Mode: cors' -H 'Content-Type: application/json' --data-binary '{"id":{},"date":"09/25/2019","list":"hh","week":false,"month":false}' --compressed

.then(() => props.history.push('/login'))goes in Signup.js in handleSubmit next to props.getUser

.then(() => props.history.push('/home')) goes in Login.js in handleSubmit next to props.getLogin

ADD return in both action files