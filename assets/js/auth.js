const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const captchaRes = grecaptcha.getResponse()
    if (!captchaRes.length > 0) {
        throw new Error("Капча не заполнена")
    }
    const fd = new FormData(e.target)
    const params = new URLSearchParams(fd)
    fetch('http://httpbin.org/post', {
        method: 'POST',
        body: params
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err))
})