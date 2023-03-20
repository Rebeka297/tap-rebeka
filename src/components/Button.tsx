type ButtonInterface = {
  label: string
  onKlik: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
}

export function Button(props: ButtonInterface) {
  const kliknuo = (e: React.MouseEvent<HTMLElement>) => {
    console.log('kliknuo sam event', e.target)
    setTimeout(() => {
      props.onKlik(e)
    }, 500)
  }
  
  return <button
    style={{ margin: 10 }}
    className={props.className}
    aria-label={props.label}
    onClick={kliknuo}>
      {props.label}
  </button>
}