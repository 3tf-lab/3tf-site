import Image from 'next/image'
/*
const icon = (color: string) => `
<svg width="94" height="84" viewBox="-23.5 -21 94 84" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.6106 12.3513C33.3488 11.0098 30.9322 9.95725 28.4348 9.22557C26.7653 8.60941 25.1026 8.27566 23.4871 8.23715H23.3928C21.8849 8.27566 20.3299 8.5709 18.7682 9.11004C16.2304 9.80963 13.7801 10.8494 11.4847 12.1972C2.32971 17.5693 -1.7025 26.2918 2.09411 32.4918L2.18835 32.6266C3.29233 34.0836 4.55787 35.2774 5.95803 36.1695L6.03881 36.2144C7.4861 37.036 9.15553 37.62 11.0067 37.9474L11.175 37.9666C11.4712 37.9923 11.7674 38.0051 12.0568 38.0051C14.0763 38.0051 16.0554 37.4275 17.8931 36.3171C19.2192 37.941 20.7136 39.3979 22.336 40.6366L23.4332 41.4774L24.5304 40.6366C26.0585 39.4685 27.4721 38.1078 28.7377 36.5931C30.7571 37.9538 32.9651 38.6662 35.2202 38.6662C35.5029 38.6662 35.7789 38.6534 36.0616 38.6341L36.2299 38.6149C38.108 38.294 39.8044 37.7035 41.2719 36.8755L41.3526 36.8306C42.7663 35.9256 44.052 34.7126 45.1627 33.2299L45.257 33.0952C49.0603 26.8052 44.9137 17.8838 35.6039 12.3577L35.6106 12.3513ZM16.6006 27.1326C16.116 25.7847 15.7794 24.4562 15.5909 23.1725H31.2957C31.1072 24.4562 30.7706 25.7912 30.2859 27.1326H16.6006ZM23.4399 11.5875C24.6516 11.626 25.9172 11.8892 27.2163 12.3705L27.2837 12.3962C27.3442 12.4283 27.3981 12.4604 27.4587 12.4925C27.5462 12.5374 27.6337 12.5887 27.7212 12.6401C27.7818 12.6786 27.8356 12.7171 27.8962 12.7556C27.977 12.807 28.0578 12.8583 28.1386 12.9161C28.1924 12.9546 28.2463 12.9995 28.3001 13.0444C28.3742 13.1022 28.455 13.16 28.529 13.2177C28.5829 13.2627 28.6367 13.314 28.6838 13.3589C28.7511 13.4231 28.8252 13.4809 28.8925 13.5451C28.9464 13.5964 28.9935 13.6542 29.0473 13.7055C29.1079 13.7697 29.1752 13.8339 29.2358 13.8981C29.2897 13.9558 29.3368 14.02 29.3906 14.0778C29.4445 14.142 29.5051 14.2062 29.5589 14.2768C29.6128 14.3409 29.6599 14.4115 29.707 14.4757C29.7541 14.5463 29.808 14.6105 29.8551 14.6811C29.9022 14.7581 29.9494 14.8351 29.9965 14.9122C30.0369 14.9763 30.084 15.0469 30.1244 15.1111C30.1715 15.1946 30.2186 15.278 30.2657 15.3679C30.2994 15.432 30.3398 15.4962 30.3734 15.5668C30.4206 15.6567 30.461 15.753 30.5014 15.8428C30.535 15.907 30.5619 15.9712 30.5956 16.0418C30.6427 16.1445 30.6764 16.2472 30.7168 16.3499C30.7437 16.414 30.7706 16.4718 30.7908 16.536C30.8312 16.6515 30.8716 16.767 30.912 16.8826C30.9322 16.9403 30.9524 16.9917 30.9658 17.0495C31.0062 17.1778 31.0399 17.3062 31.0735 17.4346C31.087 17.4859 31.1005 17.5308 31.1139 17.5822C31.1476 17.717 31.1745 17.8517 31.2082 17.9929C31.2149 18.0379 31.2284 18.0828 31.2418 18.1341C31.2687 18.2818 31.2957 18.4358 31.3226 18.5898C31.3226 18.6284 31.3361 18.6669 31.3428 18.699C31.3697 18.8594 31.3899 19.0263 31.4034 19.1867C31.4034 19.2188 31.4101 19.2445 31.4168 19.2766C31.437 19.4499 31.4505 19.6296 31.464 19.8093V19.835H15.4496C15.6044 17.4538 16.3448 15.3871 17.6575 13.9237L17.671 13.9045C17.7787 13.789 17.8864 13.6734 17.9941 13.5643L18.0143 13.5451C18.1018 13.4616 18.196 13.3846 18.2835 13.3012C18.3172 13.2755 18.3441 13.2434 18.3778 13.2113C18.4451 13.1536 18.5124 13.1086 18.5797 13.0509C18.6403 13.0059 18.7009 12.9546 18.7682 12.9032C18.8086 12.8712 18.8557 12.8455 18.9028 12.8134C18.9971 12.7492 19.0913 12.685 19.1856 12.6273C19.2125 12.6144 19.2327 12.6016 19.2596 12.5887C19.3808 12.5181 19.502 12.4475 19.6231 12.3834C19.6837 12.3577 19.751 12.3384 19.8116 12.3128C21.0637 11.8635 22.2821 11.6132 23.4534 11.5811L23.4399 11.5875ZM15.9073 33.5573C14.5139 34.3724 13.0329 34.7447 11.5654 34.6355C10.1787 34.3788 8.94012 33.9552 7.88326 33.3583C6.8668 32.7036 5.93111 31.8179 5.09639 30.7332C2.47781 26.3367 5.83013 19.7002 12.7838 15.3871C12.7704 15.4256 12.7569 15.4641 12.7435 15.5026C12.6694 15.708 12.5954 15.9198 12.5348 16.1316C12.5079 16.2215 12.4809 16.3113 12.4607 16.3948C12.4069 16.5745 12.3598 16.7542 12.3194 16.9339C12.2992 17.0302 12.2722 17.1265 12.2521 17.2227C12.2117 17.4153 12.1713 17.6078 12.1376 17.8068C12.1242 17.8902 12.104 17.9737 12.0905 18.0571C12.0434 18.3331 12.0097 18.6155 11.9761 18.8979C11.9761 18.9428 11.9693 18.9878 11.9626 19.0327C11.9357 19.2766 11.9222 19.5205 11.9087 19.7644C11.9087 19.8607 11.902 19.9634 11.8953 20.066C11.8885 20.265 11.8818 20.464 11.8818 20.6694C11.8818 20.7785 11.8818 20.8876 11.8818 20.9967C11.8818 21.2085 11.8886 21.4203 11.902 21.6321C11.902 21.7284 11.9087 21.8182 11.9155 21.9145C11.9357 22.2162 11.9559 22.5242 11.9895 22.8323C11.9895 22.8708 12.003 22.9093 12.003 22.9479C12.0366 23.2174 12.0703 23.4934 12.1107 23.7694C12.1242 23.8721 12.1444 23.9812 12.1645 24.0839C12.1982 24.3021 12.2386 24.5139 12.2857 24.7321C12.3059 24.8477 12.3328 24.9632 12.3598 25.0787C12.4069 25.3034 12.4607 25.528 12.5146 25.7462C12.5415 25.8489 12.5617 25.9452 12.5886 26.0479C12.6761 26.3688 12.7637 26.6961 12.8646 27.017C12.8646 27.0363 12.8781 27.0556 12.8848 27.0748C12.9791 27.3829 13.08 27.6845 13.1877 27.9926C13.2214 28.0953 13.2618 28.198 13.3022 28.3007C13.383 28.5318 13.4705 28.7564 13.5647 28.9875C13.6118 29.103 13.6589 29.2185 13.7061 29.3276C13.8003 29.5587 13.9013 29.7897 14.009 30.0272C14.0561 30.1299 14.0965 30.2262 14.1436 30.3289C14.2985 30.6562 14.4533 30.99 14.6216 31.3173C14.837 31.7345 15.0591 32.1453 15.2947 32.5496C15.4024 32.7357 15.5169 32.9154 15.6246 33.1016C15.7188 33.2556 15.8063 33.4097 15.9006 33.5637L15.9073 33.5573ZM23.4399 37.1323C22.0667 35.9385 20.8213 34.5521 19.7308 33.031C19.5895 32.832 19.4548 32.633 19.3202 32.4341C19.2529 32.3378 19.1923 32.2415 19.125 32.1453C19.0106 31.972 18.9028 31.7987 18.7884 31.6254C18.6942 31.4777 18.6067 31.3301 18.5191 31.1825C18.4384 31.0413 18.3509 30.9001 18.2701 30.7589C18.223 30.669 18.1758 30.5792 18.122 30.4893H28.7444C28.6906 30.592 28.6367 30.6947 28.5829 30.791C28.5021 30.9322 28.4146 31.0734 28.3271 31.221C28.2328 31.3815 28.1386 31.5419 28.0376 31.696C27.9232 31.8757 27.8087 32.0554 27.6876 32.2351C27.6135 32.3442 27.5462 32.4533 27.4721 32.556C27.3375 32.755 27.1961 32.954 27.0548 33.1529C25.9845 34.6291 24.7661 35.9705 23.4332 37.1323H23.4399ZM42.2547 31.3494C41.4132 32.4597 40.4641 33.3583 39.4409 34.0194C38.3706 34.6227 37.1118 35.0527 35.7049 35.303C34.0354 35.4122 32.3525 34.9179 30.7773 33.8654C30.8649 33.737 30.9389 33.6022 31.0197 33.4738C31.1947 33.1914 31.3765 32.9154 31.538 32.6266C31.7871 32.1966 32.0294 31.7537 32.2583 31.3109C32.4266 30.9835 32.5814 30.6562 32.7362 30.3289C32.7834 30.2262 32.8305 30.1235 32.8776 30.0208C32.9584 29.8347 33.0459 29.6485 33.1199 29.4688C33.1401 29.4175 33.1536 29.379 33.1671 29.3405C33.2142 29.2249 33.2613 29.1094 33.3084 28.9939C33.3959 28.7692 33.4834 28.5446 33.5642 28.32C33.6046 28.2108 33.645 28.1082 33.6787 27.999C33.7796 27.7038 33.8806 27.415 33.9748 27.1197C33.9883 27.0876 33.995 27.0556 34.0085 27.0235C34.1095 26.7025 34.197 26.3752 34.2845 26.0543C34.3114 25.958 34.3316 25.8553 34.3585 25.7591C34.4124 25.5344 34.4662 25.3098 34.5134 25.0851C34.5403 24.9696 34.5605 24.8541 34.5874 24.7386C34.6278 24.5268 34.6682 24.3085 34.7086 24.0967C34.7288 23.9876 34.749 23.8785 34.7624 23.7758C34.8028 23.5191 34.8365 23.2623 34.8701 23.0056C34.8701 22.9479 34.8836 22.8901 34.8903 22.8387C34.924 22.5307 34.9509 22.229 34.9711 21.9209C34.9711 21.8247 34.9778 21.7348 34.9846 21.6449C34.998 21.4331 35.0048 21.2213 35.0048 21.0095C35.0048 20.9004 35.0048 20.7913 35.0048 20.6822C35.0048 20.4832 35.0048 20.2907 34.9913 20.0917C34.9913 19.989 34.9846 19.8799 34.9778 19.7772C34.9644 19.5526 34.9509 19.3279 34.924 19.1097C34.924 19.0455 34.9105 18.9749 34.9038 18.9108C34.8769 18.6284 34.8365 18.3524 34.7894 18.0764C34.7759 17.9929 34.7624 17.9159 34.749 17.8389C34.7153 17.6399 34.6749 17.4474 34.6345 17.2548C34.6143 17.1586 34.5874 17.0559 34.5672 16.9596C34.5268 16.7863 34.4797 16.6066 34.4326 16.4333C34.4057 16.337 34.3787 16.2472 34.3518 16.1509C34.2912 15.9583 34.2306 15.7722 34.1633 15.5797C34.1431 15.5283 34.1297 15.4706 34.1095 15.4192C41.3661 19.8863 44.9204 26.8117 42.2547 31.3494Z" fill="${color}"/>
<path d="M20.3973 6.09985C19.5827 6.09985 18.849 5.5543 18.6807 4.76485L18.0883 2.0114C17.8931 1.10643 18.5057 0.220704 19.4548 0.0345739C20.4107 -0.151556 21.3329 0.432507 21.5282 1.33749L22.1205 4.09093C22.3158 4.99591 21.7032 5.88163 20.754 6.06776C20.6329 6.09343 20.5117 6.09985 20.3973 6.09985Z" fill="${color}"/>
<path d="M26.9538 6.09982C26.8394 6.09982 26.7182 6.08698 26.597 6.06773C25.6479 5.8816 25.0353 4.99588 25.2305 4.0909L25.8229 1.33746C26.0181 0.432478 26.9471 -0.151586 27.8962 0.0345443C28.8454 0.220674 29.458 1.1064 29.2627 2.01138L28.6704 4.76482C28.5021 5.55427 27.7683 6.09982 26.9538 6.09982Z" fill="${color}"/>
</svg>
`
*/
/*

placeholder={"blur"}
blurDataURL={`data:image/svg+xml;base64,${toBase64(icon(`#fec834`))}`}
*/

//const toBase64 = (str: string) => typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

interface FixedImageProps {
    size: any;
    url: string;
    alt: string;
    grid?: boolean;
}

export default function FixedImage({ size, url, alt, grid }:FixedImageProps) {
    return (
        <Image
            className={grid ? 'fixed-image' : ''}
            height={1500}
            width={1500}
            src={url}
            alt={alt}
            sizes={size}
            style={{
                borderRadius: `.5vw`,
                minWidth: size,
                width: size, 
                maxWidth: size,
                minHeight: size,
                height: size,
                maxHeight: size,
            }}
            role={'button'}
        />
    )
}