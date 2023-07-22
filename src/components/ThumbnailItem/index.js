import './index.css'

const ThumbnailItem = props => {
  const {thumbnailData, validateThumbnail} = props
  const {thumbnailUrl, id} = thumbnailData

  const onClickSelectResultThumbnail = () => {
    validateThumbnail(id)
  }

  return (
    <li className="thumbnail">
      <button
        className="thumbnail-btn"
        type="button"
        onClick={onClickSelectResultThumbnail}
      >
        <img src={thumbnailUrl} className="thumbnail-img" alt="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailItem
