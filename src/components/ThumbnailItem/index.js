// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbNailItem, updatedState, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = thumbNailItem

  const onClickEvent = () => {
    updatedState(imageUrl, imageAltText)
  }
  const activeStyle = isActive ? 'active-btn' : ''
  return (
    <li>
      <button
        type="button"
        className={`button ${activeStyle}`}
        onClick={onClickEvent}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
