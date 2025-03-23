 import styles from '../Novel.module.css'
 async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params
    return <div className={styles.container}>Novel: {id}</div>
  }

  export default Page