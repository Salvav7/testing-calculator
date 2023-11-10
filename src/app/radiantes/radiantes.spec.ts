import { radianes } from "./radianes";

describe("radianes unit tests", () => {
    it("Should radianes 0 = 0", () => {
      // Arrange
      let result = 0;
      // Act
      result = radianes(0);
      // Assert
      expect(result).toBe(0);
    });
  
    it("Should radianes 360 = 6.283185307179586", () => {
      // Arrange
      let result = 0;
      // Act
      result = radianes(360);
      // Assert
      expect(result).toBe(6.283185307179586);
    });
  
    it("Should radianes -45 = -0.7853981633974483", () => {
      // Arrange
      let result = 0;
      // Act
      result = radianes(-45);
      // Assert
      expect(result).toBe(-0.7853981633974483);
    });
  
    it("Should radianes 720 = 12.566370614359172", () => {
      // Arrange
      let result = 0;
      // Act
      result = radianes(720);
      // Assert
      expect(result).toBe(12.566370614359172);
    });
  });
  