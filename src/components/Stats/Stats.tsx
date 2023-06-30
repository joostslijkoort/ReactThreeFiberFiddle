interface Props {
  rotation: string,
  position: string
}
const Stats = ({ rotation, position }: Props) => {
  return (
    <div className="fixed z-10 top-0 right-0 bg-black/20 p-3.5 mr-1 block rounded-b-lg">
      <div className='text-gray-900'>{rotation}</div>
      <div className='text-gray-900'>{position}</div>
    </div>
  )
}

export default Stats;