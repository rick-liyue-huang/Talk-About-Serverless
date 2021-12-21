import React from 'react';
import styles from './style.module.scss';
import avatarImg from './avatar.jpeg';

export const Banner = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.introduce}>
				<img className={styles.avatar} src={'https://serverless-blog-static-resources.oss-ap-southeast-2.aliyuncs.com/images/avatar.jpeg'} alt={'avatar'} />
				<div className={styles.title}>This is Rick Huang's Introduction</div>
				<div className={styles.desc}>blabla...</div>
			</div>
		</div>
	)
}
