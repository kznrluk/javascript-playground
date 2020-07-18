// イメージのオブジェクト
const imageList = {
    image1: {
        link: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
    },

    image2: {
        link: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Brown_and_white_tabby_cat_with_green_eyes-Hisashi-01.jpg/800px-Brown_and_white_tabby_cat_with_green_eyes-Hisashi-01.jpg"
    },

    image3: {
        link: "https://cdn.pixabay.com/photo/2019/02/10/11/07/cat-3986945_960_720.jpg"
    }
}

// 上のイメージのオブジェクトをHTMLに変換するプログラムの部品(=関数といいます)
// ここは関数の定義をしているだけで、まだ実行はされません
const imageObjectToHTML = (imageObject) => {
    // このimageObject     ↑~~~~~~~~ には上で定義したimageListのデータが入ってきます

    console.log('imageObjectToHTML関数が実行されました！');
    console.log('引数に指定されているimageObjectの内容は...');
    console.log(imageObject);
    //          ~~~~~~~~~~~ JavaScriptではいろんなものをconsole.logに渡すことができます。
    // ブザウザを通して内容を確認してみてください

    // 今回はlinkが欲しいので、.を使って中身をimageLinkにコピーします
    const imageLink = imageObject.link

    // return で、呼び出したところにデータが戻ります
    return `<img src="${imageLink}" />`;
}

// ロードが終わった時に呼ばれるプログラムの部品(=関数)
// ここは関数の定義をしているだけで、まだ実行はされません
const init = () => {
    // コンソールでログを出すという関数を実行
    // F12 のコンソールを見てみてください 'init関数が実行されました' と出ているはずです
    console.log('init関数が実行されました！');
    // カッコの中↑に渡したものは関数の中で使うことができます

    // ここで、imageListの中身をみてみましょう。ブラウザのコンソールと見比べてください。
    console.log('imageListの中身↓');
    console.log(imageList);
    // おそらく、このファイルの一番上と同じものが表示されたと思います


    console.log('関数imageObjectToHTMLを実行します');
    // 関数名          ↓_______________にカッコをつけて、imageListの内容を渡して実行しています
    const image1HTML = imageObjectToHTML(imageList.image1);
    //                                  ↑~~~~~~~~~~~~~~~
    // imageList.image1で、imageListの中のimage1という意味になります
    // ここで、image1HTMLの中は <img src="https://~~~~~~/cat-2083492_960_720.jpg" /> になっています

    console.log('image1HTMLの中身↓');
    console.log(image1HTML);

    console.log('もう一度関数imageObjectToHTMLを実行します');
    // 上と同じようにimage2もやってみます
    const image2HTML = imageObjectToHTML(imageList.image2);

    console.log('image2HTMLの中身↓');
    console.log(image2HTML);

    // 最初から用意されている documentオブジェクト を使うことでHTMLを操作することができるようになります！
    const element = document.getElementById('imageList');
    //                      ↑~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // HTMLの中から、IDを使いエレメント(*)を取得しろという関数です
    // つまり、elementの中にはHTMLの <div id="imageList"></div> が入っています

    // エレメントの内容(=innerHTML)を書き換えています
    element.innerHTML = image1HTML + image2HTML;
    //                  ~~~~~~~~~~~~~~~~~~~~~~~
    // + が出てきていますが、これによりimage1HTMLの内容とimage2HTMLの内容を連結させています
    // 今、element.innerHTMLの中身は
    // <img src="https://~~~~~~/cat-2083492_960_720.jpg" /><img src="https://~~~/800px-Brown_and_white_tabby_cat_with_green_eyes-Hisashi-01.jpg />
    // になりました

    console.log('element.innerHTMLの中身を確認してみてください↓');
    console.log(element.innerHTML);

    // 一瞬ですが、ここまできてブラウザに初めて画像が表示されます
}

// ドキュメントのロードが終わった時に init を呼び出す
// ここで初めて命令が実行されます。次に、initが実行されるようになります
window.addEventListener('load', init)

/**
 * # windowとはなんでしょうか？
 *   ブラウザでJavaScriptを実行する時に、元から存在しているオブジェクトです。
 *   その名の通り、ブラウザのウィンドウを表しています。
 *   例えば、戻る・進むなどもこのオブジェクトを通して実行することができます
 *
 * # これについて調べるためにはどうすれば良いでしょうか？
 *   [ window オブジェクト ] で調べてみてください。MDNは信用できる情報源です。
 *
 * # const とはなんでしょうか？
 *   constとは、変数を宣言する時に利用する構文です。
 *
 * # なぜ宣言が必要なのでしょうか？
 *   宣言がないと、変数であることがブラウザにとってわからないためです。
 *   もし imageObjectToHTML を imageObjectToHTM と書き間違えてしまった時
 *   JavaScriptではブラウザが適当なエラーを出してくれます。
 */