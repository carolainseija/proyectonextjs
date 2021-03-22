import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


  render() {
    return (
      <Html>
        <Head />
        {/*
         En el head se puede personalizar
         * favicon
         * webflont
         * stylesheet
         * script/Js
         */}
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument