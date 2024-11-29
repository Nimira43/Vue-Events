import { Button } from 'antd'

export default function page() {
  return (
    <div className='p-5 flex flex-col gap-5'>
      <h1 className='text-[#028ec6]'>Stour End Motors</h1>
      <Button
        type='primary'
      >Confirm</Button>
      
      <Button
        type='default'
      >Cancel</Button>
    </div>
  )
}
