
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log(`\nThe file has been saved!`);
        console.log(`+-----------------------------------------------------+`);
      });

  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });

