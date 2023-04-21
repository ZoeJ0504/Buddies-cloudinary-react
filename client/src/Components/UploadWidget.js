import { useEffect, useRef } from "react"

function UploadWidget({ setCloudinaryImageTag}) {
    const cloudinaryRef = useRef()
    const widgetRef = useRef()
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dlewu2m7d',
            uploadPreset: 'd6pj1fjn',
            clientAllowedFormats: ["jpg", "jpeg"],
        }, function (error, result) {

            result?.info?.public_id && setCloudinaryImageTag(result.info.public_id) 

        })
    }, [])


    return (
        <button onClick={() => widgetRef.current.open()} type="button"> Upload </button>

    )
}

export default UploadWidget