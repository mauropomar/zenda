export default async function base64File(url) {
    console.log(url)
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        console.log(base64data)
        resolve(base64data);
      };
    });
  }