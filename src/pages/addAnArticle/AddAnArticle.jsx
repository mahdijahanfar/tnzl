import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from './styles';
import { AddAPhoto, AddPhotoAlternate } from "@material-ui/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Helmet } from "react-helmet";

function AddAnArticle() {
    //این کامپوننت نیمه کاره رها شد
    const {
        root,
        title,
        everyInput,
        upLoadContainer,
        btnLink,
        btnLinkWrapper,
        upLoadButtons,
        upLoadTexts,
        ckContainers,
    } = useStyles()

    const [x, setX] = React.useState("")//سورسی که داشتم اینو نوشته بود ,منم از روش همون جوری کپی کردم و خودم هم نمیدونم ایکس و ست ایکس چه فایده ای دارن
    const [articleData, setArticleData] = React.useState({
        "articleTitle": "",
        "ayeText": "",
        "translate": "",
        "meaning": "",
        "articleText": "",
        "articleMainImage": "",
    })
    const handleWriteOnInput = (key, value) => {
        setArticleData({ ...articleData, [key]: value })
    }

    const imageSelectRef = React.useRef(null)
    const onSetMainImage = (selectedImage) => {
        if (selectedImage.type.includes("image")) {
            const reader = new FileReader()
            reader.onload = e => {
                handleWriteOnInput(
                    "articleMainImage",
                    <img src={e.target.result} alt="" />
                )
            }
            reader.readAsDataURL(selectedImage)
        }
    }

    return (
        <Grid className={root} >
            <Helmet>
                <title>
                    تنزیل | اضافه کردن مقاله
                </title>
            </Helmet>
            <Grid container justifyContent="center" >
                <input placeholder="عنوان مقاله" className={everyInput + " " + title} onChange={(e) => handleWriteOnInput("articleTitle", e.target.value)} />
                <div className={ckContainers} >
                    <CKEditor
                        editor={ClassicEditor}
                        config={{
                            placeholder: "متن آیه",
                            language: 'fa',
                            contentsLangDirection: 'rtl',
                            fontColor: {
                                colors: [
                                    {
                                        color: 'hsl(0, 0%, 0%)',
                                        label: 'Black'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 30%)',
                                        label: 'Dim grey'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 60%)',
                                        label: 'Grey'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 90%)',
                                        label: 'Light grey'
                                    },

                                ]
                            },

                        }}
                        data={articleData["ayeText"]}
                        onReady={editor => {
                            setX(editor);
                            editor.editing.view.change(writer => {
                                writer.setStyle(
                                    "min-height",
                                    "200px",
                                    editor.editing.view.document.getRoot()
                                )
                            })
                        }}
                        onChange={(e, editor) => handleWriteOnInput("ayeText", editor.getData())}
                    />
                </div>
                <div className={ckContainers} >
                    <CKEditor
                        editor={ClassicEditor}
                        config={{
                            placeholder: "ترجمه",
                            language: 'fa',
                            contentsLangDirection: 'rtl',
                            fontColor: {
                                colors: [
                                    {
                                        color: 'hsl(0, 0%, 0%)',
                                        label: 'Black'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 30%)',
                                        label: 'Dim grey'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 60%)',
                                        label: 'Grey'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 90%)',
                                        label: 'Light grey'
                                    },

                                ]
                            },

                        }}
                        data={articleData["translate"]}
                        onReady={editor => {
                            // console.log('Editor is ready to use!', editor); کانفیگ
                            setX(editor);
                            editor.editing.view.change(writer => {
                                writer.setStyle(
                                    "min-height",
                                    "200px",
                                    editor.editing.view.document.getRoot()
                                )
                            })
                        }}
                        onChange={(e, editor) => handleWriteOnInput("translate", editor.getData())}
                    />
                </div>
                <div className={ckContainers} >
                    <CKEditor
                        editor={ClassicEditor}
                        config={{
                            placeholder: "تفسیر",
                            language: 'fa',
                            contentsLangDirection: 'rtl',
                            fontColor: {
                                colors: [
                                    {
                                        color: 'hsl(0, 0%, 0%)',
                                        label: 'Black'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 30%)',
                                        label: 'Dim grey'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 60%)',
                                        label: 'Grey'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 90%)',
                                        label: 'Light grey'
                                    },

                                ]
                            },

                        }}
                        data={articleData["meaning"]}
                        onReady={editor => {
                            setX(editor);
                            editor.editing.view.change(writer => {
                                writer.setStyle(
                                    "min-height",
                                    "200px",
                                    editor.editing.view.document.getRoot()
                                )
                            })
                        }}
                        onChange={(e, editor) => handleWriteOnInput("meaning", editor.getData())}
                    />
                </div>
                <div className={ckContainers} >
                    <CKEditor
                        editor={ClassicEditor}
                        config={{
                            // Plugin: AutoImage,
                            placeholder: "متن مقاله",
                            language: 'fa',
                            contentsLangDirection: 'rtl',
                            fontColor: {
                                colors: [
                                    {
                                        color: 'hsl(0, 0%, 0%)',
                                        label: 'Black'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 30%)',
                                        label: 'Dim grey'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 60%)',
                                        label: 'Grey'
                                    },
                                    {
                                        color: 'hsl(0, 0%, 90%)',
                                        label: 'Light grey'
                                    },

                                ]
                            },

                        }}
                        data={articleData["articleText"]}
                        onReady={editor => {
                            setX(editor);
                            editor.editing.view.change(writer => {
                                writer.setStyle(
                                    "min-height",
                                    "200px",
                                    editor.editing.view.document.getRoot()
                                )
                            })
                        }}
                        onChange={(e, editor) => handleWriteOnInput("articleText", editor.getData())}
                    />
                </div>
            </Grid>
            {articleData["articleMainImage"] && articleData["articleMainImage"]}
            <Grid container className={upLoadContainer} >
                <div onClick={() => imageSelectRef.current.click()} className={upLoadButtons} >
                    <AddPhotoAlternate />
                    <p className={upLoadTexts} >آپلود عکس</p>
                </div>
                <div className={upLoadButtons} >
                    <AddAPhoto />
                    <p className={upLoadTexts} >آپلود فیلم</p>
                </div>
                <div className={btnLinkWrapper} >
                    <a className={btnLink} href="" >
                        آپلود
                    </a>
                </div>
            </Grid>
            <input ref={imageSelectRef} onChange={({ target }) => onSetMainImage(target.files[0])} type={"file"} style={{ display: "none" }} />

        </Grid>
    );
}

export default AddAnArticle;

