export default function ({content = 'new', classNames = ''}) {
  return (
    <div
      className={`px-2 bg-gradient-to-r from-blue-500 via-green-500 to-pink-500 text-white rounded-full ${classNames}`}
    >
      {content}
    </div>
  )
}
