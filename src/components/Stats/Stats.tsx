const Stats = ({ rotation, position }: any) => {
  return (
    <div className="fixed z-10 top-0 right-0 bg-white/20 p-3.5 mr-1 block rounded-b-lg">
      <div className='text-white'>{rotation}</div>
      <div className='text-white'>{position}</div>
    </div>
  )
}

export default Stats;