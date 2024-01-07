function ImageFig({children,imageTitle}){
    return(<>
<figure>
{children}
<figcaption>{imageTitle ?? 'Image Title'}</figcaption>
</figure>
    </>)
}

export default ImageFig;