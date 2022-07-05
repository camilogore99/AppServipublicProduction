import * as React from "react"
import Svg, {Mask, Path, G} from "react-native-svg"

// @ts-ignore
function SvgComponent(props) {
    return (
        <Svg width={223} height={195} viewBox="0 0 223 195" fill="none" {...props}>
            <Mask
                id="prefix__b"
                x={36}
                y={0}
                width={190}
                height={195}
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M36.626.888h148.362v193.728H36.626V.888z"
                    fill={"#fff"}
                />
            </Mask>
            <G mask="url(#prefix__b)">
                <Path
                    d="M171.235 23.148L110.807.887l-59.842 21.96c-7.638 3.7-14.34 5.916-14.34 13.216v36.344c0 25.24 6.448 50.252 19.714 72.333 11.162 18.582 28.446 37.714 55.056 49.876 24.46-8.151 42.718-29.876 53.881-48.458 13.265-22.081 19.712-47.092 19.712-72.333V41.143c0-10.41-5.378-15.493-13.753-17.995z"
                    fill={"#FFCF5C"}
                />
            </G>
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M147.709 115.153h-11.104V54.718c0-14.225-11.573-25.8-25.798-25.8-14.225 0-25.797 11.575-25.797 25.8v60.435H73.906V54.718c0-20.348 16.554-36.902 36.901-36.902 20.347 0 36.902 16.554 36.902 36.902v60.435z"
                fill={"#000"}
            />
            <Path
                d="M155.374 152.079H66.239a5.162 5.162 0 01-5.162-5.162V93.432a5.162 5.162 0 015.162-5.163h89.135a5.163 5.163 0 015.163 5.163v53.485a5.163 5.163 0 01-5.163 5.162z"
                fill="#0F4C81"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M119.12 111.861a8.314 8.314 0 00-16.627 0c0 3.8 2.565 6.969 6.046 7.961v12.429h4.536v-12.429c3.481-.992 6.045-4.161 6.045-7.961z"
                fill="#000"
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M66.38 146.029c-.227 0-.412-10.642-.412-23.766 0-13.129.185-23.768.413-23.768.227 0 .413 10.639.413 23.768 0 13.124-.186 23.766-.413 23.766zM104.296 122.518c-.026.041-.389-.13-.974-.554-.587-.419-1.367-1.138-2.143-2.183-1.55-2.033-2.97-5.727-2.048-9.715.965-3.979 3.89-6.645 6.187-7.767 1.163-.586 2.181-.878 2.895-.991.713-.116 1.113-.106 1.119-.057.035.155-1.577.307-3.733 1.56-2.123 1.199-4.775 3.77-5.664 7.445-.853 3.683.364 7.17 1.725 9.193 1.364 2.087 2.738 2.945 2.636 3.069z"
                fill="#FAFAFA"
            />
            <Path
                d="M185.512 180.522s.238-.333.719-.967l.404-.532c.137-.204.26-.447.409-.702.29-.512.653-1.092.912-1.826.142-.36.313-.734.457-1.141l.362-1.318c.149-.456.227-.951.305-1.468.067-.517.207-1.048.224-1.616.243-2.255.093-4.887-.357-7.793-.9-5.829-3.373-12.694-7.157-20.155-3.777-7.478-8.979-15.52-15.371-23.902-6.394-8.386-14.081-17.048-22.919-25.745-8.846-8.686-18.862-17.413-30.089-25.684-5.618-4.128-11.542-8.131-17.787-11.903-6.24-3.78-12.819-7.304-19.757-10.359-6.939-3.016-14.26-5.645-21.982-6.89-3.849-.594-7.819-.88-11.723-.29-1.947.3-3.86.831-5.663 1.64-1.772.866-3.404 2.02-4.752 3.476-1.295 1.505-2.261 3.255-2.922 5.114a21.972 21.972 0 00-.989 5.815c-.148 3.947.589 7.86 1.615 11.617 2.116 7.534 5.561 14.51 9.347 21.063 3.825 6.547 8.076 12.684 12.542 18.454 4.459 5.777 9.112 11.208 13.852 16.32 9.496 10.214 19.307 19.172 28.944 26.974 9.648 7.791 19.128 14.442 28.187 19.842 9.055 5.394 17.638 9.647 25.496 12.549 7.842 2.91 14.944 4.584 20.837 4.814 2.937.118 5.569-.033 7.782-.532.562-.081 1.073-.282 1.579-.407.506-.136.988-.27 1.424-.469l1.267-.51c.389-.19.741-.401 1.083-.583.699-.342 1.234-.768 1.71-1.116.235-.175.463-.325.651-.485l.481-.462c.574-.549.879-.823.879-.823s-.28.295-.846.858l-.476.473c-.186.162-.412.316-.647.496-.472.355-1.007.79-1.706 1.14-.342.187-.695.403-1.083.597-.404.165-.828.34-1.272.524-.438.203-.921.341-1.428.482-.509.13-1.023.335-1.587.419-2.224.516-4.868.683-7.819.58-5.921-.206-13.05-1.86-20.919-4.754-7.885-2.885-16.493-7.126-25.575-12.511-9.083-5.388-18.588-12.035-28.26-19.824-9.66-7.798-19.494-16.759-29.013-26.982a236.26 236.26 0 01-13.89-16.34c-4.48-5.78-8.743-11.93-12.584-18.496-3.802-6.574-7.265-13.575-9.4-21.168-1.034-3.787-1.782-7.74-1.633-11.758.076-2.005.399-4.01 1.013-5.944.678-1.912 1.674-3.72 3.015-5.275 1.392-1.507 3.078-2.698 4.902-3.587 1.85-.831 3.807-1.372 5.789-1.677 3.974-.6 7.983-.308 11.863.29 7.784 1.259 15.131 3.902 22.093 6.931 6.96 3.067 13.553 6.604 19.804 10.396 6.256 3.783 12.188 7.799 17.811 11.938 11.238 8.294 21.258 17.043 30.105 25.754 8.839 8.721 16.523 17.407 22.911 25.819 6.384 8.409 11.576 16.478 15.341 23.984 3.771 7.489 6.226 14.384 7.104 20.244.439 2.921.575 5.566.316 7.835-.021.57-.166 1.104-.237 1.625-.082.518-.164 1.016-.316 1.474l-.377 1.322c-.148.409-.322.785-.469 1.146-.268.734-.639 1.315-.939 1.824-.153.255-.279.495-.419.7-.154.193-.291.369-.415.527-.496.625-.757.938-.757.938z"
                fill="#0084F4"
            />
            <Path
                d="M213.953 111.87s-.045-.407-.108-1.199a367.17 367.17 0 00-.051-.667c-.035-.244-.105-.507-.163-.795-.124-.575-.24-1.251-.535-1.97-.132-.365-.256-.756-.419-1.156l-.606-1.225c-.193-.439-.465-.859-.75-1.297-.295-.431-.543-.922-.909-1.356-1.32-1.846-3.183-3.71-5.454-5.578-4.551-3.75-10.966-7.228-18.757-10.277-7.797-3.065-17.031-5.605-27.382-7.605-10.353-2.003-21.855-3.35-34.24-3.956-12.384-.593-25.668-.439-39.55.863a236.683 236.683 0 00-21.198 2.957c-7.172 1.332-14.427 3.082-21.639 5.42-7.187 2.369-14.4 5.28-20.991 9.491-3.267 2.12-6.421 4.548-8.94 7.588-1.254 1.52-2.328 3.19-3.134 4.994-.747 1.826-1.198 3.772-1.233 5.758.034 1.984.478 3.933 1.223 5.76a21.974 21.974 0 003.133 4.998c2.517 3.044 5.672 5.473 8.938 7.594 6.593 4.214 13.809 7.126 20.996 9.496 7.213 2.34 14.47 4.09 21.644 5.423 7.173 1.343 14.26 2.298 21.2 2.958 13.886 1.301 27.171 1.456 39.555.862 12.387-.607 23.889-1.954 34.242-3.956 10.35-2.002 19.585-4.541 27.381-7.606 7.79-3.049 14.203-6.527 18.755-10.278 2.27-1.867 4.133-3.732 5.453-5.577.365-.435.613-.925.907-1.355.286-.438.557-.859.751-1.297l.605-1.225c.163-.4.287-.793.42-1.156.295-.72.41-1.395.534-1.97.058-.289.128-.552.163-.795l.051-.666c.063-.793.108-1.2.108-1.2s-.014.407-.06 1.203l-.041.67c-.03.246-.097.511-.152.801-.117.58-.225 1.26-.514 1.987-.131.366-.251.762-.412 1.167l-.6 1.236c-.191.444-.461.869-.744 1.312-.294.435-.541.93-.905 1.369-1.317 1.865-3.18 3.749-5.45 5.636-4.555 3.788-10.976 7.299-18.775 10.379-7.805 3.095-17.05 5.661-27.412 7.687-10.367 2.025-21.884 3.393-34.285 4.018-12.402.61-25.705.47-39.614-.822-6.953-.654-14.054-1.606-21.242-2.948-7.19-1.33-14.466-3.082-21.703-5.426-7.213-2.375-14.459-5.294-21.105-9.539-3.294-2.139-6.482-4.59-9.046-7.687a22.41 22.41 0 01-3.2-5.111c-.768-1.879-1.228-3.891-1.262-5.943.035-2.052.5-4.062 1.27-5.94.828-1.853 1.927-3.559 3.204-5.106 2.566-3.093 5.753-5.543 9.047-7.68 6.646-4.242 13.888-7.16 21.1-9.534 7.235-2.344 14.51-4.094 21.698-5.425 7.187-1.342 14.287-2.293 21.239-2.947 13.907-1.292 27.208-1.432 39.609-.822 12.401.626 23.917 1.992 34.284 4.018 10.362 2.025 19.608 4.591 27.413 7.686 7.8 3.078 14.222 6.59 18.778 10.379 2.272 1.887 4.134 3.771 5.451 5.636.365.439.612.935.905 1.37.284.441.553.867.745 1.31l.599 1.237c.162.404.282.801.412 1.168.29.726.398 1.407.515 1.987.055.29.121.555.152.8l.041.671c.046.796.06 1.203.06 1.203z"
                fill="#0084F4"
            />
            <Path
                d="M176.27 26.414s-.349-.214-1.014-.65l-.558-.368c-.215-.122-.465-.228-.728-.358-.531-.255-1.135-.577-1.885-.786-.369-.116-.755-.26-1.17-.376l-1.34-.272c-.466-.115-.964-.16-1.485-.201-.521-.031-1.06-.136-1.628-.113-2.267-.087-4.882.243-7.75.893-5.753 1.3-12.432 4.239-19.614 8.528-7.2 4.284-14.864 10.027-22.787 16.98-7.926 6.957-16.038 15.223-24.105 24.638-8.056 9.424-16.073 20.018-23.55 31.787-3.73 5.888-7.317 12.074-10.65 18.565-3.341 6.485-6.404 13.291-8.973 20.424-2.531 7.13-4.65 14.615-5.36 22.405-.327 3.879-.34 7.86.519 11.714.434 1.921 1.094 3.794 2.026 5.537.986 1.708 2.248 3.257 3.795 4.501 1.59 1.189 3.403 2.032 5.303 2.563 1.921.466 3.899.648 5.87.586 3.947-.124 7.8-1.129 11.478-2.411 7.369-2.629 14.092-6.547 20.368-10.776 6.269-4.267 12.098-8.931 17.547-13.784 5.456-4.846 10.553-9.861 15.327-14.943 9.536-10.177 17.797-20.581 24.915-30.733 7.109-10.162 13.093-20.077 17.853-29.486 4.759-9.406 8.41-18.26 10.763-26.3 2.365-8.024 3.545-15.224 3.369-21.12-.085-2.938-.417-5.553-1.067-7.726-.12-.555-.354-1.052-.515-1.549-.17-.493-.337-.965-.566-1.387l-.596-1.229c-.217-.374-.45-.712-.657-1.04-.388-.674-.851-1.178-1.229-1.629-.192-.222-.357-.44-.529-.616l-.495-.45c-.588-.534-.882-.818-.882-.818s.314.26.914.784l.505.443c.175.175.343.39.539.61.387.448.859.95 1.255 1.624.21.329.449.666.671 1.04.192.391.396.802.61 1.233.233.423.404.895.579 1.391.165.498.404.998.529 1.555.667 2.182 1.014 4.809 1.115 7.76.203 5.92-.956 13.147-3.301 21.197-2.336 8.064-5.972 16.944-10.721 26.374-4.748 9.435-10.724 19.374-17.829 29.559-7.115 10.175-15.376 20.604-24.919 30.804-4.777 5.094-9.88 10.124-15.344 14.983-5.457 4.867-11.3 9.544-17.586 13.828-6.297 4.246-13.043 8.183-20.47 10.834-3.708 1.293-7.6 2.313-11.617 2.44a22.397 22.397 0 01-6-.601c-1.956-.544-3.828-1.414-5.47-2.645-1.6-1.284-2.904-2.884-3.916-4.643-.958-1.788-1.632-3.703-2.072-5.66-.874-3.922-.858-7.943-.528-11.854.718-7.852 2.85-15.364 5.393-22.518 2.58-7.156 5.654-13.976 9.006-20.473a236.557 236.557 0 0110.683-18.591c7.5-11.783 15.538-22.382 23.619-31.808 8.092-9.419 16.227-17.682 24.18-24.634 7.949-6.949 15.642-12.685 22.87-16.957 7.212-4.279 13.922-7.203 19.706-8.481 2.885-.64 5.515-.958 7.795-.855.57-.02 1.113.089 1.638.124.523.046 1.024.094 1.491.214l1.346.284c.418.12.804.268 1.175.39.751.216 1.356.546 1.885.81.263.134.513.245.727.37l.554.38c.659.449.988.689.988.689z"
                fill="#0084F4"
            />
            <Path
                d="M6.54 154.44a3.831 3.831 0 11-5.419 5.418 3.831 3.831 0 015.418-5.418zM222.67 35.738a3.831 3.831 0 11-7.662 0 3.831 3.831 0 017.662 0zM30.73 167.036a.975.975 0 11-1.949-.001.975.975 0 011.95.001zM51.509 59.694a.974.974 0 11-1.949 0 .974.974 0 011.949 0zM203.428 111.87a.975.975 0 11-1.95-.002.975.975 0 011.95.002zM216.956 66.484a.974.974 0 11-1.948 0 .974.974 0 011.948 0z"
                fill="#0F4C81"
            />
        </Svg>
    )
}

const SvgLogoKey = React.memo(SvgComponent)
export default SvgLogoKey
