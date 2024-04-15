import React from 'react'

const InputField = (props) => {
  return (
    <div className="grid w-full max-w-xs items-center gap-1.5">
      <input
        placeholder={props.placeholder}
        type={props.type}
        className="flex h-[50px] w-full rounded-r-[12px] rounded-l-[12px] border border-input bg-[#f1f1f1] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#7f7f7f] placeholder:text-[12px] placeholder:font-[600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  )
}

export default InputField