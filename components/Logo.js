import { deepOrange } from '@material-ui/core/colors'

const Logo = ({
    color='white',
    background=deepOrange[500],
    size=95,
    shadow=true,
    onClick,
}) => (
    <div
        className="Logo"
        onClick={onClick}
    >
        <svg viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d="M15.8768 67.1758C14.5108 67.1758 13.2814 66.8902 12.1886 66.319C11.1082 65.7353 10.2575 64.9281 9.63659 63.8974C9.01568 62.8667 8.70522 61.6994 8.70522 60.3955C8.70522 59.0915 9.01568 57.9242 9.63659 56.8935C10.2575 55.8628 11.1082 55.0618 12.1886 54.4905C13.2814 53.9069 14.5108 53.6151 15.8768 53.6151C17.0689 53.6151 18.1431 53.8262 19.0993 54.2484C20.0555 54.6706 20.8503 55.2791 21.4837 56.0739L19.1366 58.1974C18.2921 57.1791 17.2676 56.67 16.0631 56.67C15.3552 56.67 14.7219 56.8252 14.1631 57.1356C13.6167 57.4461 13.1882 57.887 12.8778 58.4582C12.5797 59.017 12.4307 59.6628 12.4307 60.3955C12.4307 61.1281 12.5797 61.7801 12.8778 62.3513C13.1882 62.9102 13.6167 63.3448 14.1631 63.6553C14.7219 63.9657 15.3552 64.1209 16.0631 64.1209C17.2676 64.1209 18.2921 63.6118 19.1366 62.5935L21.4837 64.717C20.8503 65.5118 20.0555 66.1203 19.0993 66.5425C18.1431 66.9647 17.0689 67.1758 15.8768 67.1758Z" />
            <path fill={color} d="M22.9605 53.0935H26.4997V66.9151H22.9605V53.0935Z" />
            <path fill={color} d="M33.8664 67.0827C32.786 67.0827 31.8112 66.8592 30.9419 66.4121C30.0726 65.9651 29.3896 65.3441 28.8929 64.5494C28.4085 63.7546 28.1664 62.8543 28.1664 61.8484C28.1664 60.8549 28.4085 59.9608 28.8929 59.166C29.3896 58.3713 30.0664 57.7566 30.9233 57.3219C31.7925 56.8749 32.7736 56.6513 33.8664 56.6513C34.9592 56.6513 35.9402 56.8749 36.8095 57.3219C37.6788 57.7566 38.3556 58.3713 38.8399 59.166C39.3242 59.9484 39.5664 60.8425 39.5664 61.8484C39.5664 62.8543 39.3242 63.7546 38.8399 64.5494C38.3556 65.3441 37.6788 65.9651 36.8095 66.4121C35.9402 66.8592 34.9592 67.0827 33.8664 67.0827ZM33.8664 64.27C34.4873 64.27 34.9965 64.0588 35.3938 63.6366C35.7912 63.202 35.9899 62.6059 35.9899 61.8484C35.9899 61.1033 35.7912 60.5196 35.3938 60.0974C34.9965 59.6752 34.4873 59.4641 33.8664 59.4641C33.2455 59.4641 32.7363 59.6752 32.3389 60.0974C31.9416 60.5196 31.7429 61.1033 31.7429 61.8484C31.7429 62.6059 31.9416 63.202 32.3389 63.6366C32.7363 64.0588 33.2455 64.27 33.8664 64.27Z" />
            <path fill={color} d="M51.8235 56.819V66.9151H48.452V65.8347C48.0794 66.2445 47.6324 66.5549 47.1108 66.766C46.5892 66.9771 46.0366 67.0827 45.453 67.0827C44.149 67.0827 43.1059 66.6977 42.3235 65.9278C41.5536 65.1579 41.1686 64.003 41.1686 62.4631V56.819H44.7079V61.8856C44.7079 62.6432 44.8507 63.1958 45.1363 63.5435C45.4219 63.8912 45.8379 64.0651 46.3843 64.0651C46.9432 64.0651 47.3964 63.8726 47.7441 63.4876C48.1043 63.0902 48.2843 62.4879 48.2843 61.6807V56.819H51.8235Z" />
            <path fill={color} d="M64.8326 53.0935V66.9151H61.4611V65.9092C60.8029 66.6915 59.8156 67.0827 58.4993 67.0827C57.5803 67.0827 56.7421 66.8716 55.9846 66.4494C55.2271 66.0147 54.6248 65.4 54.1777 64.6053C53.7431 63.8105 53.5258 62.8915 53.5258 61.8484C53.5258 60.8053 53.7431 59.8925 54.1777 59.1102C54.6248 58.3154 55.2271 57.7069 55.9846 57.2847C56.7421 56.8624 57.5803 56.6513 58.4993 56.6513C59.7039 56.6513 60.6352 56.999 61.2934 57.6945V53.0935H64.8326ZM59.2444 64.27C59.8529 64.27 60.3558 64.0588 60.7532 63.6366C61.1506 63.202 61.3493 62.6059 61.3493 61.8484C61.3493 61.1033 61.1506 60.5196 60.7532 60.0974C60.3683 59.6752 59.8653 59.4641 59.2444 59.4641C58.6235 59.4641 58.1143 59.6752 57.7169 60.0974C57.3196 60.5196 57.1209 61.1033 57.1209 61.8484C57.1209 62.6059 57.3196 63.202 57.7169 63.6366C58.1143 64.0588 58.6235 64.27 59.2444 64.27Z" />
            <path fill={color} d="M14.4052 81.1837L13.0268 82.6553V85.9151H9.37581V72.8758H13.0268V78.2964L18.0748 72.8758H22.1356L16.8082 78.6504L22.415 85.9151H18.1307L14.4052 81.1837Z" />
            <path fill={color} d="M23.0332 75.819H26.5724V85.9151H23.0332V75.819ZM24.8028 74.7013C24.1571 74.7013 23.6355 74.5213 23.2381 74.1611C22.8407 73.801 22.642 73.3539 22.642 72.82C22.642 72.286 22.8407 71.8389 23.2381 71.4788C23.6355 71.1187 24.1571 70.9386 24.8028 70.9386C25.4486 70.9386 25.9701 71.1124 26.3675 71.4602C26.7649 71.7955 26.9636 72.2301 26.9636 72.7641C26.9636 73.3229 26.7649 73.7886 26.3675 74.1611C25.9701 74.5213 25.4486 74.7013 24.8028 74.7013Z" />
            <path fill={color} d="M35.8392 85.5053C35.5411 85.6915 35.1748 85.8343 34.7401 85.9337C34.3179 86.033 33.8646 86.0827 33.3803 86.0827C32.064 86.0827 31.0519 85.7598 30.3441 85.1141C29.6362 84.4683 29.2823 83.5059 29.2823 82.2268V78.8366H27.8107V76.1915H29.2823V73.5651H32.8215V76.1915H35.1313V78.8366H32.8215V82.1896C32.8215 82.5497 32.9146 82.8353 33.1009 83.0464C33.2996 83.2451 33.5604 83.3445 33.8833 83.3445C34.2931 83.3445 34.6532 83.2389 34.9637 83.0278L35.8392 85.5053Z" />
            <path fill={color} d="M42.0727 86.0827C40.955 86.0827 39.9553 85.8592 39.0736 85.4121C38.1919 84.9651 37.5027 84.3441 37.006 83.5494C36.5217 82.7546 36.2795 81.8543 36.2795 80.8484C36.2795 79.8425 36.5217 78.9484 37.006 78.166C37.5027 77.3713 38.1919 76.7566 39.0736 76.3219C39.9553 75.8749 40.955 75.6513 42.0727 75.6513C43.2151 75.6513 44.2024 75.8997 45.0344 76.3964C45.8664 76.8807 46.4563 77.5575 46.804 78.4268L44.0658 79.8239C43.6063 78.9173 42.9357 78.4641 42.054 78.4641C41.4207 78.4641 40.8929 78.6752 40.4707 79.0974C40.0609 79.5196 39.856 80.1033 39.856 80.8484C39.856 81.6059 40.0609 82.202 40.4707 82.6366C40.8929 83.0588 41.4207 83.27 42.054 83.27C42.9357 83.27 43.6063 82.8167 44.0658 81.9102L46.804 83.3072C46.4563 84.1765 45.8664 84.8595 45.0344 85.3562C44.2024 85.8405 43.2151 86.0827 42.0727 86.0827Z" />
            <path fill={color} d="M54.6757 75.6513C55.93 75.6513 56.9359 76.0239 57.6934 76.769C58.4633 77.5141 58.8483 78.6379 58.8483 80.1405V85.9151H55.3091V80.718C55.3091 79.3396 54.7564 78.6504 53.6512 78.6504C53.0427 78.6504 52.5522 78.849 52.1796 79.2464C51.8195 79.6438 51.6395 80.2399 51.6395 81.0347V85.9151H48.1002V72.0935H51.6395V76.7504C52.0244 76.3902 52.4777 76.117 52.9993 75.9307C53.5208 75.7445 54.0796 75.6513 54.6757 75.6513Z" />
            <path fill={color} d="M71.5355 80.8856C71.5355 80.9105 71.5168 81.2023 71.4796 81.7611H64.1404C64.2894 82.2827 64.575 82.6863 64.9972 82.9719C65.4319 83.2451 65.9721 83.3817 66.6178 83.3817C67.1021 83.3817 67.5181 83.3134 67.8659 83.1768C68.226 83.0402 68.5861 82.8167 68.9462 82.5062L70.809 84.4435C69.8279 85.5363 68.3936 86.0827 66.5061 86.0827C65.3263 86.0827 64.2894 85.8592 63.3953 85.4121C62.5011 84.9651 61.8057 84.3441 61.309 83.5494C60.8247 82.7546 60.5825 81.8543 60.5825 80.8484C60.5825 79.8549 60.8185 78.967 61.2904 78.1847C61.7747 77.3899 62.4391 76.769 63.2835 76.3219C64.1279 75.8749 65.0779 75.6513 66.1335 75.6513C67.1394 75.6513 68.0521 75.8624 68.8717 76.2847C69.6913 76.6945 70.3371 77.2968 70.809 78.0915C71.2933 78.8739 71.5355 79.8053 71.5355 80.8856ZM66.1521 78.166C65.6057 78.166 65.1462 78.3213 64.7737 78.6317C64.4136 78.9422 64.1838 79.3644 64.0845 79.8984H68.2198C68.1204 79.3644 67.8845 78.9422 67.5119 78.6317C67.1518 78.3213 66.6985 78.166 66.1521 78.166Z" />
            <path fill={color} d="M79.7427 75.6513C80.997 75.6513 82.0029 76.0239 82.7604 76.769C83.5303 77.5141 83.9153 78.6379 83.9153 80.1405V85.9151H80.3761V80.718C80.3761 79.3396 79.8235 78.6504 78.7182 78.6504C78.1097 78.6504 77.6192 78.849 77.2467 79.2464C76.8865 79.6438 76.7065 80.2399 76.7065 81.0347V85.9151H73.1673V75.819H76.5388V76.918C76.9362 76.5082 77.4081 76.1977 77.9545 75.9866C78.5009 75.7631 79.097 75.6513 79.7427 75.6513Z" />
            <path fill={color} d="M47.7328 16.506H40.6699V11.073C40.6699 10.077 39.855 9.26202 38.8589 9.26202C37.8629 9.26202 37.0479 10.077 37.0479 11.073V16.506H29.985C28.9165 16.506 28.0835 17.4296 28.174 18.4981L28.3913 20.6894C35.0558 22.2288 40.6699 26.9555 40.6699 34.616L40.7062 49.1041H43.7849C45.3061 49.1041 46.5557 47.9269 46.7368 46.4419L49.5257 18.4981C49.6344 17.4296 48.8013 16.506 47.7328 16.506ZM35.2369 45.4821H11.6939C10.6978 45.4821 9.8829 46.297 9.8829 47.2931C9.8829 48.2891 10.6978 49.1041 11.6939 49.1041H35.2369C36.233 49.1041 37.0479 48.2891 37.0479 47.2931C37.0479 46.297 36.233 45.4821 35.2369 45.4821ZM11.875 34.616H35.0558C36.1786 34.616 37.066 33.6019 36.8487 32.5153C35.6716 26.6657 29.5685 23.7319 23.4654 23.7319C17.3623 23.7319 11.2774 26.6657 10.0821 32.5153C9.86479 33.6019 10.7703 34.616 11.875 34.616ZM35.2369 38.2381H11.6939C10.6978 38.2381 9.8829 39.053 9.8829 40.0491C9.8829 41.0451 10.6978 41.8601 11.6939 41.8601H35.2369C36.233 41.8601 37.0479 41.0451 37.0479 40.0491C37.0479 39.053 36.233 38.2381 35.2369 38.2381Z" />
        </svg>

        <style jsx>{`
            .Logo {
                border-radius: ${10 * size / 95}px;
                ${shadow ? `box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);` : ``}
                width:  ${size}px;
                height: ${size}px;
                background-color: ${background};
            }

            .Logo svg {
                width:  ${size}px;
                height: ${size}px;
            }
        `}</style>
    </div>
)

export default Logo