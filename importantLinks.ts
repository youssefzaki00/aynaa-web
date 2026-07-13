const env = (key: string, fallback: string) =>
	process.env[key]?.trim() || fallback;

/** CleanBrowsing Adult Filter DNS */
export const PrimaryDNS = env(
	"NEXT_PUBLIC_PRIMARY_DNS",
	"185.228.168.10"
);
export const SecondaryDNS = env(
	"NEXT_PUBLIC_SECONDARY_DNS",
	"185.228.169.11"
);

export const downloadWindows = env(
	"NEXT_PUBLIC_DOWNLOAD_WINDOWS",
	"https://github.com/youssefzaki00/aynaa-windows/releases/download/first/default.exe"
);
export const downloadAndroid = env(
	"NEXT_PUBLIC_DOWNLOAD_ANDROID",
	"https://github.com/youssefzaki00/aynaa-android/releases/download/mvp/Ainaa-v2.3.0.apk"
);

export const vodafoneCashWallet = env(
	"NEXT_PUBLIC_VODAFONE_CASH_WALLET",
	"01070474589"
);
export const instapayPaymentLink = env(
	"NEXT_PUBLIC_INSTAPAY_PAYMENT_LINK",
	"https://ipn.eg/S/yusufthoughts/instapay/73aeRK"
);
