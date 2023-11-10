import { porcentaje } from "./porcentaje";

describe("porcentaje unit tests", () => {

    it("Should porcentaje 50 % 16 = 8", () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0;
        
        // Act
        result = porcentaje(50, 16);

        // Assert
        expect(result).toBe(8);
    })

    it(" Should porcentaje 1000 % 22 = 220", () => {
        // Arrange
        let result = 0;
        // Act
        result = porcentaje(1000, 22);
        // Assert
        expect(result).toBe(220);
    })

    it(" Should porcentaje 0 % 0 = 0", () => {
        // Arrange
        let result = 0;
        // Act
        result = porcentaje(0, 0);
        // Assert
        expect(result).toBe(0);
    })

    it(" Should porcentaje 1450 % 33 = 478.5", () => {
        // Arrange
        let result = 0;
        // Act
        result = porcentaje(1450, 33);
        // Assert
        expect(result).toBe(478.5);
    })
});