import '../css/ThumbStyle.css';
import ImageFig from '../atoms/ImageFig';
function Thumb({ name, mobile, imageLink, age, verified,userId, children,deleteUser,editUser }) {
    const playButton = children;
    return (<>
        <div className='card b-r-10 box-shadow-sm font-b-600 text-capitalized'>
            <div>
                <ImageFig imageTitle={name}>
                    <img className='object-fix-cover' src={imageLink} alt='thumb'/>
                </ImageFig>
            </div>
            <div className='p-10'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='font-12'>
                        {age ?? "Age"}
                    </div>
                    <div className='font-12'>
                        {mobile ?? "Mobile Number"}
                    </div>
                </div>
                <div className='d-flex justify-content-end align-items-center '>

                    <div className='active font-10'>
                        {verified ? 'Enabled' : 'Disabled'}
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-space-between'>
                <div className='w-100 text-left'>
                    {playButton}
                </div>
                <div>
                    <button className='btn btn-danger' onClick={() => {
                        deleteUser(userId)
                    }}>X
                    </button>
                </div>
                <div>
                    <button className='btn btn-danger' onClick={() => {
                        editUser(userId)
                    }}>Edit
                    </button>
                </div>
            </div>
        </div>
    </>);
}

export default Thumb;



