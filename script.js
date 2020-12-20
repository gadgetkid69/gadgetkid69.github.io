function send() {
    // Variabes
    var url = ('https://discord.com/api/webhooks/764916383783452723/qweqxVQJO29pUDMl_HZd9OtCnIBweLTvvRNe-Ofj9fL6S6iioxsfK2qpw-BQJKAbmHCz')

    var itemname = document.getElementById('itemname').value;
    if (itemname === '') return alert('Please insert something to send!');

    var rn = document.getElementById('rn').value;
    if (rn === '') return alert('Please insert something to send!');

    var rm = document.getElementById('rm').value;
    if (rm === '') return alert('Please insert something to send!');

    var resell = document.getElementById('resell').value;
    if (resell === '') return alert('Please insert something to send!');

    var brk = document.getElementById('brk').value;
    if (brk === '') return alert('Please insert something to send!');

    var sld = document.getElementById('sld').value;
    if (sld === '') return alert('Please insert something to send!');

    var img = document.getElementById('img').value;
    

    // Webhook Data
    const data = {
  "username": "Serpent' Brickseek Flips",
  "avatar_url": "https://cdn.discordapp.com/attachments/764916291164438538/787181335298048010/DSQGcrQI_400x400.jpg",
  "content": "<@&785360448244809759>",
  "embeds": [
    {
      "title": (`**${itemname}**`),
      "color": 565245,
      "description": (`**Retail:** $${rn}-$${rm}\n**Resell:** $${resell}+\n\n**Local Stock Check:** [here](${brk})\n\n**Solds:** [here](${sld})`),
      "timestamp": "",
      "url": "",
      "author": {},
      "image": {
        "url": (img),
      },
      "thumbnail": {},
      "footer": {
        "text": "Serpent's Brickseek Flips",
        "icon_url": "https://cdn.discordapp.com/attachments/764916291164438538/787181335298048010/DSQGcrQI_400x400.jpg"
      },
      "fields": []
    }
  ]
    };

    // Checks If URL Is Valid
    fetch(url).then((data) => {
        if (data.status === 404) {
            alert('Invalid webhook. Please make sure it is the correct URL or that it hasn\'t been deleted!')
        };
    });

    // Post To Discord Webhook
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
};