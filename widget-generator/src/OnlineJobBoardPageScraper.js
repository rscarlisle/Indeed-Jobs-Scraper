class OnlineJobBoardPageScraper {
  constructor(url) {
    this.url = url;
  }

  scrape(url) {
    fetch(`http://cors-bypass-proxy.axiomlogic.com/https://www.indeed.com/jobs?q=front+end+web+developer&l=California`)
      .then(response => {
        return response.text();
        })
      .then(responseAfter => {
        // console.log(responseAfter)

        let parser = new DOMParser();
        let doc = parser.parseFromString(responseAfter, "text/html");
        // returns a HTMLDocument, which also is a Document.
        console.log(doc)
      })
      .catch(err => err)
  };
}
let foo = new OnlineJobBoardPageScraper("http://indeed.com");
foo.scrape("http://indeed.com");

