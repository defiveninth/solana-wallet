import { useAuth } from '@/actions/auth.actions'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SeedPhraseForm() {
	const { seedPhrase, handleInputChange, handleSubmit, isValid, error } = useAuth()

	return (
		<div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
			<h1 className="text-2xl font-bold mb-6 text-center">Enter Your 12-Word Seed Phrase:</h1>
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					{seedPhrase.map((word, index) => (
						<div key={index}>
							<Label htmlFor={`word-${index + 1}`} className="sr-only">
								Word {index + 1}
							</Label>
							<Input
								id={`word-${index + 1}`}
								type="password"
								placeholder={`Word ${index + 1}`}
								value={word}
								onChange={(e) => handleInputChange(index, e.target.value)}
								className="w-full"
								required
							/>
						</div>
					))}
				</div>
				{error && <p className="text-red-500 mt-4">{error}</p>}

				{isValid ? (
					<p className="text-green-600 mt-4">✅ Valid Seed Phrase</p>
				) : (
					<p className="text-yellow-600 mt-4">⚠️ Invalid Seed Phrase</p>
				)}
				<Button type="submit" className="w-full mt-6" disabled={!isValid}>
					Submit Seed Phrase
				</Button>
			</form>
		</div>
	)
}
