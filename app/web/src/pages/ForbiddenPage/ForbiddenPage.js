import WithNavbarLayout from 'src/layouts/WithNavbarLayout/WithNavbarLayout'

const ForbiddenPage = () => {
  return (
    <WithNavbarLayout>
      <div className="flex h-1/2-screen flex-initial justify-center items-center">
        <h1 className="text-4xl tracking-wide font-semibold text-red-500">
          Sorry, aber das darfst du so einfach nicht sehen
        </h1>
      </div>
    </WithNavbarLayout>
  )
}

export default ForbiddenPage
